import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ChessRatingChart from '../components/ui/ChessRatingChart'
import type { RatingPoint } from '../components/ui/ChessRatingChart'

// 👇 Replace with your exact chess.com username (from chess.com/member/<username>)
const CHESS_USERNAME = 'y8ngg'

interface RapidStats {
  rating: number
  win: number
  loss: number
  draw: number
}

interface GameSummary {
  url: string
  opponent: string
  opponentRating: number
  myRating: number
  result: 'Win' | 'Loss' | 'Draw'
  date: string
}

// only chart rating history from this date onward (Unix seconds)
const HISTORY_START = new Date('2025-03-08').getTime() / 1000

// chess.com result codes that mean the game was a draw
const DRAW_RESULTS = [
  'agreed',
  'repetition',
  'stalemate',
  'insufficient',
  '50move',
  'timevsinsufficient',
]

export default function ChessPage() {
  const [stats, setStats] = useState<RapidStats | null>(null)
  const [history, setHistory] = useState<RatingPoint[]>([])
  const [recentGames, setRecentGames] = useState<GameSummary[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadChessData() {
      try {
        // 1. Current rapid rating + win/loss/draw record
        const statsRes = await fetch(
          `https://api.chess.com/pub/player/${CHESS_USERNAME}/stats`
        )
        if (!statsRes.ok) throw new Error('Could not load chess.com stats')
        const statsData = await statsRes.json()
        const rapid = statsData.chess_rapid
        if (rapid) {
          setStats({
            rating: rapid.last.rating,
            win: rapid.record.win,
            loss: rapid.record.loss,
            draw: rapid.record.draw,
          })
        }

        // 2. Every monthly archive, fetched in parallel
        const archivesRes = await fetch(
          `https://api.chess.com/pub/player/${CHESS_USERNAME}/games/archives`
        )
        const archivesData = await archivesRes.json()
        const archiveUrls: string[] = archivesData.archives ?? []

        const months = await Promise.all(
          archiveUrls.map((url) => fetch(url).then((r) => r.json()))
        )

        // 3. Walk every rated rapid game to build the rating timeline
        const points: RatingPoint[] = []
        const allRapidGames: GameSummary[] = []

        months.forEach((month) => {
          const games = month.games ?? []
          games.forEach((g: any) => {
            if (g.time_class !== 'rapid' || !g.rated) return

            const meIsWhite =
              g.white.username.toLowerCase() === CHESS_USERNAME.toLowerCase()
            const me = meIsWhite ? g.white : g.black
            const opponent = meIsWhite ? g.black : g.white

            const date = new Date(g.end_time * 1000).toLocaleDateString()

            // only include games from 2025 onward in the chart
            if (g.end_time >= HISTORY_START) {
              points.push({ time: g.end_time, rating: me.rating, date })
            }

            let result: 'Win' | 'Loss' | 'Draw'
            if (me.result === 'win') result = 'Win'
            else if (DRAW_RESULTS.includes(me.result)) result = 'Draw'
            else result = 'Loss'

            allRapidGames.push({
              url: g.url,
              opponent: opponent.username,
              opponentRating: opponent.rating,
              myRating: me.rating,
              result,
              date,
            })
          })
        })

        points.sort((a, b) => a.time - b.time)
        setHistory(points)
        setRecentGames(allRapidGames.slice(-5).reverse())
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    loadChessData()
  }, [])

  return (
    <main className="max-w-2xl mx-auto px-6 pt-32 pb-20">
      <Link to="/" className="text-sm text-stone-400 hover:text-clay transition-colors">
        ← Back home
      </Link>

      <h1 className="text-3xl font-semibold text-ink tracking-tight mt-6 mb-2">Chess</h1>
      <p className="text-stone-500 mb-8">
        I picked up chess recently and have been playing on chess.com. Live stats below.{' '}
        <a
          href={`https://www.chess.com/member/${CHESS_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="text-clay underline hover:text-ink"
        >
          View my profile →
        </a>
      </p>

      {loading && <p className="text-sm text-stone-400">Loading chess stats…</p>}

      {error && (
        <p className="text-sm text-red-500">
          {error}. Double-check the username in <code>ChessPage.tsx</code>.
        </p>
      )}

      {!loading && !error && (
        <>
          {stats && (
            <div className="border border-stone-200 rounded-lg p-5 mb-8 bg-white/40">
              <p className="text-xs text-clay uppercase tracking-widest mb-1">
                Rapid Rating
              </p>
              <p className="text-4xl font-semibold text-ink mb-3">{stats.rating}</p>
              <p className="text-sm text-stone-500">
                {stats.win}W · {stats.loss}L · {stats.draw}D
              </p>
            </div>
          )}

          <h2 className="text-xs font-semibold text-clay tracking-widest uppercase mb-4">
            Rapid Rating Over Time
          </h2>
          <div className="border border-stone-200 rounded-lg p-4 mb-8 bg-white/40">
            <ChessRatingChart data={history} />
          </div>

          <h2 className="text-xs font-semibold text-clay tracking-widest uppercase mb-4">
            Recent Games
          </h2>
          {recentGames.length === 0 ? (
            <p className="text-sm text-stone-400">No recent games found.</p>
          ) : (
            <ul className="space-y-2">
              {recentGames.map((game) => (
                <li key={game.url}>
                  <a
                    href={game.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between border border-stone-200 rounded-lg px-4 py-3 bg-white/40 hover:border-clay/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={
                          game.result === 'Win'
                            ? 'text-xs font-semibold w-12 text-emerald-600'
                            : game.result === 'Loss'
                              ? 'text-xs font-semibold w-12 text-red-500'
                              : 'text-xs font-semibold w-12 text-stone-400'
                        }
                      >
                        {game.result}
                      </span>
                      <span className="text-sm text-stone-700">
                        vs {game.opponent} ({game.opponentRating})
                      </span>
                    </div>
                    <span className="text-xs text-stone-400">{game.date}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </main>
  )
}
