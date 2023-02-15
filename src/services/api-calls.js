const baseUrl = "https://www.dnd5eapi.co"

export async function getMonsterList() {
  const res = await fetch(`${baseUrl}/api/monsters`)
  return res.json()
}
