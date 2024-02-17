const API_URL = 'https://api.github.com';

export async function getUserData(username) {
  const response = await fetch(`${API_URL}/users/${username}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user data for ${username}`);
  }
  return response.json();
}

export async function getRepositories(username, searchTerm = '') {
  const response = await fetch(`${API_URL}/users/${username}/repos?q=${searchTerm}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch repositories for ${username}`);
  }
  return response.json();
}
