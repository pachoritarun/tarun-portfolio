export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      animal_breeds: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          species: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          species: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          species?: string
          updated_at?: string
        }
        Relationships: []
      }
      animals: {
        Row: {
          breed_id: string | null
          created_at: string
          created_by: string
          date_of_birth: string | null
          id: string
          location_district: string | null
          location_state: string | null
          location_village: string | null
          owner_contact: string | null
          owner_name: string | null
          registration_number: string | null
          sex: string
          tag_number: string
          updated_at: string
        }
        Insert: {
          breed_id?: string | null
          created_at?: string
          created_by: string
          date_of_birth?: string | null
          id?: string
          location_district?: string | null
          location_state?: string | null
          location_village?: string | null
          owner_contact?: string | null
          owner_name?: string | null
          registration_number?: string | null
          sex: string
          tag_number: string
          updated_at?: string
        }
        Update: {
          breed_id?: string | null
          created_at?: string
          created_by?: string
          date_of_birth?: string | null
          id?: string
          location_district?: string | null
          location_state?: string | null
          location_village?: string | null
          owner_contact?: string | null
          owner_name?: string | null
          registration_number?: string | null
          sex?: string
          tag_number?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "animals_breed_id_fkey"
            columns: ["breed_id"]
            isOneToOne: false
            referencedRelation: "animal_breeds"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action: string
          id: string
          ip_address: unknown | null
          new_values: Json | null
          old_values: Json | null
          record_id: string
          table_name: string
          timestamp: string
          user_agent: string | null
          user_id: string
        }
        Insert: {
          action: string
          id?: string
          ip_address?: unknown | null
          new_values?: Json | null
          old_values?: Json | null
          record_id: string
          table_name: string
          timestamp?: string
          user_agent?: string | null
          user_id: string
        }
        Update: {
          action?: string
          id?: string
          ip_address?: unknown | null
          new_values?: Json | null
          old_values?: Json | null
          record_id?: string
          table_name?: string
          timestamp?: string
          user_agent?: string | null
          user_id?: string
        }
        Relationships: []
      }
      bpa_sync_records: {
        Row: {
          bpa_record_id: string | null
          created_at: string
          error_message: string | null
          evaluation_id: string
          id: string
          last_retry_at: string | null
          request_payload: Json | null
          response_payload: Json | null
          retry_count: number | null
          sync_status: string
          sync_type: string
          synced_at: string | null
        }
        Insert: {
          bpa_record_id?: string | null
          created_at?: string
          error_message?: string | null
          evaluation_id: string
          id?: string
          last_retry_at?: string | null
          request_payload?: Json | null
          response_payload?: Json | null
          retry_count?: number | null
          sync_status?: string
          sync_type: string
          synced_at?: string | null
        }
        Update: {
          bpa_record_id?: string | null
          created_at?: string
          error_message?: string | null
          evaluation_id?: string
          id?: string
          last_retry_at?: string | null
          request_payload?: Json | null
          response_payload?: Json | null
          retry_count?: number | null
          sync_status?: string
          sync_type?: string
          synced_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bpa_sync_records_evaluation_id_fkey"
            columns: ["evaluation_id"]
            isOneToOne: false
            referencedRelation: "evaluations"
            referencedColumns: ["id"]
          },
        ]
      }
      coffee_payments: {
        Row: {
          amount: number
          coffee_type: string
          created_at: string
          id: string
          message: string | null
          payment_method: string
          status: string
          transaction_id: string | null
          updated_at: string
          user_email: string | null
        }
        Insert: {
          amount: number
          coffee_type: string
          created_at?: string
          id?: string
          message?: string | null
          payment_method?: string
          status?: string
          transaction_id?: string | null
          updated_at?: string
          user_email?: string | null
        }
        Update: {
          amount?: number
          coffee_type?: string
          created_at?: string
          id?: string
          message?: string | null
          payment_method?: string
          status?: string
          transaction_id?: string | null
          updated_at?: string
          user_email?: string | null
        }
        Relationships: []
      }
      evaluation_images: {
        Row: {
          blur_score: number | null
          calibration_data: Json | null
          created_at: string
          evaluation_id: string
          exif_data: Json | null
          file_size: number | null
          has_calibration_markers: boolean | null
          height: number | null
          id: string
          image_type: string
          lighting_score: number | null
          original_filename: string | null
          pose_score: number | null
          quality_score: number | null
          storage_path: string
          upload_status: string
          width: number | null
        }
        Insert: {
          blur_score?: number | null
          calibration_data?: Json | null
          created_at?: string
          evaluation_id: string
          exif_data?: Json | null
          file_size?: number | null
          has_calibration_markers?: boolean | null
          height?: number | null
          id?: string
          image_type: string
          lighting_score?: number | null
          original_filename?: string | null
          pose_score?: number | null
          quality_score?: number | null
          storage_path: string
          upload_status?: string
          width?: number | null
        }
        Update: {
          blur_score?: number | null
          calibration_data?: Json | null
          created_at?: string
          evaluation_id?: string
          exif_data?: Json | null
          file_size?: number | null
          has_calibration_markers?: boolean | null
          height?: number | null
          id?: string
          image_type?: string
          lighting_score?: number | null
          original_filename?: string | null
          pose_score?: number | null
          quality_score?: number | null
          storage_path?: string
          upload_status?: string
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "evaluation_images_evaluation_id_fkey"
            columns: ["evaluation_id"]
            isOneToOne: false
            referencedRelation: "evaluations"
            referencedColumns: ["id"]
          },
        ]
      }
      evaluation_videos: {
        Row: {
          created_at: string
          duration_seconds: number | null
          evaluation_id: string
          file_size: number | null
          id: string
          original_filename: string | null
          quality_score: number | null
          storage_path: string
          upload_status: string
          video_type: string
        }
        Insert: {
          created_at?: string
          duration_seconds?: number | null
          evaluation_id: string
          file_size?: number | null
          id?: string
          original_filename?: string | null
          quality_score?: number | null
          storage_path: string
          upload_status?: string
          video_type: string
        }
        Update: {
          created_at?: string
          duration_seconds?: number | null
          evaluation_id?: string
          file_size?: number | null
          id?: string
          original_filename?: string | null
          quality_score?: number | null
          storage_path?: string
          upload_status?: string
          video_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "evaluation_videos_evaluation_id_fkey"
            columns: ["evaluation_id"]
            isOneToOne: false
            referencedRelation: "evaluations"
            referencedColumns: ["id"]
          },
        ]
      }
      evaluations: {
        Row: {
          animal_id: string
          composite_score: number | null
          created_at: string
          evaluation_date: string
          evaluation_type: string
          evaluator_id: string
          id: string
          location_notes: string | null
          ml_model_version: string | null
          status: string
          uncertainty_score: number | null
          updated_at: string
          weather_conditions: string | null
        }
        Insert: {
          animal_id: string
          composite_score?: number | null
          created_at?: string
          evaluation_date?: string
          evaluation_type: string
          evaluator_id: string
          id?: string
          location_notes?: string | null
          ml_model_version?: string | null
          status?: string
          uncertainty_score?: number | null
          updated_at?: string
          weather_conditions?: string | null
        }
        Update: {
          animal_id?: string
          composite_score?: number | null
          created_at?: string
          evaluation_date?: string
          evaluation_type?: string
          evaluator_id?: string
          id?: string
          location_notes?: string | null
          ml_model_version?: string | null
          status?: string
          uncertainty_score?: number | null
          updated_at?: string
          weather_conditions?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "evaluations_animal_id_fkey"
            columns: ["animal_id"]
            isOneToOne: false
            referencedRelation: "animals"
            referencedColumns: ["id"]
          },
        ]
      }
      trait_definitions: {
        Row: {
          bpa_mapping_code: string | null
          created_at: string
          description: string | null
          id: string
          is_active: boolean | null
          max_value: number | null
          measurement_unit: string | null
          min_value: number | null
          trait_category: string
          trait_code: string
          trait_name: string
        }
        Insert: {
          bpa_mapping_code?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          max_value?: number | null
          measurement_unit?: string | null
          min_value?: number | null
          trait_category: string
          trait_code: string
          trait_name: string
        }
        Update: {
          bpa_mapping_code?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          max_value?: number | null
          measurement_unit?: string | null
          min_value?: number | null
          trait_category?: string
          trait_code?: string
          trait_name?: string
        }
        Relationships: []
      }
      trait_measurements: {
        Row: {
          created_at: string
          evaluation_id: string
          final_value: number
          id: string
          is_manual_override: boolean | null
          measurement_metadata: Json | null
          ml_confidence_score: number | null
          ml_predicted_value: number | null
          notes: string | null
          override_reason: string | null
          trait_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          evaluation_id: string
          final_value: number
          id?: string
          is_manual_override?: boolean | null
          measurement_metadata?: Json | null
          ml_confidence_score?: number | null
          ml_predicted_value?: number | null
          notes?: string | null
          override_reason?: string | null
          trait_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          evaluation_id?: string
          final_value?: number
          id?: string
          is_manual_override?: boolean | null
          measurement_metadata?: Json | null
          ml_confidence_score?: number | null
          ml_predicted_value?: number | null
          notes?: string | null
          override_reason?: string | null
          trait_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "trait_measurements_evaluation_id_fkey"
            columns: ["evaluation_id"]
            isOneToOne: false
            referencedRelation: "evaluations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trait_measurements_trait_id_fkey"
            columns: ["trait_id"]
            isOneToOne: false
            referencedRelation: "trait_definitions"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
