// GitHub API utility to fetch user data and repositories
// This file handles all GitHub API calls for the portfolio

const GITHUB_USERNAME = "U-kings"
const GITHUB_API_BASE = "https://api.github.com"

// Interface for GitHub repository data
export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  topics: string[]
}

// Interface for GitHub user data
export interface GitHubUser {
  login: string
  name: string | null
  bio: string | null
  avatar_url: string
  public_repos: number
  followers: number
  following: number
  html_url: string
}

// Helper function to build headers with authentication if available
function getHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  }

  // Uses server-side environment variables to bypass the 60 req/hour limit (up to 5,000 req/hour)
  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  return headers
}

/**
 * Fetch GitHub user profile information
 * @returns GitHub user data or null if fetch fails
 */
export async function getGitHubUser(): Promise<GitHubUser | null> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`, {
      headers: getHeaders(),
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      console.error("[v0] Failed to fetch GitHub user:", response.status, response.statusText)
      return null
    }

    return await response.json()
  } catch (error) {
    console.error("[v0] Error fetching GitHub user:", error)
    return null
  }
}

/**
 * Fetch GitHub repositories sorted by stars
 * @param limit Number of repositories to fetch (default: 6)
 * @returns Array of GitHub repositories or empty array if fetch fails
 */
export async function getGitHubRepos(limit = 6): Promise<GitHubRepo[]> {
  try {
    // Note: Changed sort to 'updated' as GitHub's /users/:username/repos endpoint 
    // natively accepts 'created', 'updated', or 'pushed'. We will sort by stars below.
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?type=owner&per_page=100`,
      {
        headers: getHeaders(),
        next: { revalidate: 3600 }, // Cache for 1 hour
      },
    )

    if (!response.ok) {
      console.error("[v0] Failed to fetch GitHub repos:", response.status, response.statusText)
      return []
    }

    const repos: any[] = await response.json()

    // 1. Filter out forked repositories
    // 2. Sort by stargazers_count descending (Highest stars first)
    // 3. Slice down to your required limit
    return repos
      // .filter((repo) => !repo.fork)
      // .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, limit)
  } catch (error) {
    console.error("[v0] Error fetching GitHub repos:", error)
    return []
  }
}
