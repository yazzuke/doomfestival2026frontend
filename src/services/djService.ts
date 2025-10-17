export interface DJ {
  id: number;
  name: string;
  artist_name: string;
  bio: string;
  image_url: string;
  instagram_url: string;
  soundcloud_url: string;
  spotify_url: string;
  order_position: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface DJResponse {
  success: boolean;
  data: DJ[];
}

const API_URL = 'https://doomfestivalback.zeabur.app/api/djs';

export const getDJs = async (): Promise<DJ[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Error al obtener los DJs');
    }
    const data: DJResponse = await response.json();
    return data.data.filter(dj => dj.is_active);
  } catch (error) {
    console.error('Error fetching DJs:', error);
    throw error;
  }
};