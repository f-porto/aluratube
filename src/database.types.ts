export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      favorite: {
        Row: {
          id: number
          created_at: string | null
          github: string
        }
        Insert: {
          id?: number
          created_at?: string | null
          github: string
        }
        Update: {
          id?: number
          created_at?: string | null
          github?: string
        }
      }
      playlist: {
        Row: {
          id: number
          created_at: string | null
          name: string
        }
        Insert: {
          id?: number
          created_at?: string | null
          name: string
        }
        Update: {
          id?: number
          created_at?: string | null
          name?: string
        }
      }
      video: {
        Row: {
          id: number
          created_at: string | null
          title: string
          url: string
          thumb: string
          playlist: number
        }
        Insert: {
          id?: number
          created_at?: string | null
          title: string
          url: string
          thumb: string
          playlist?: number
        }
        Update: {
          id?: number
          created_at?: string | null
          title?: string
          url?: string
          thumb?: string
          playlist?: number
        }
      }
    }
    Views: {
      playlists: {
        Row: {
          vtitle: string | null
          vurl: string | null
          vthumb: string | null
          pname: string | null
        }
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

