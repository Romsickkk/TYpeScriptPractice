export async function get<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Faled to fetch data");
  }

  const data = await response.json();

  return data as T;
}
