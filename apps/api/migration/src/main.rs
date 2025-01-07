// migration/src/main.rs
use migration::Migrator;
use sea_orm_migration::prelude::*;
use std::env;

#[tokio::main]
async fn main() {
    // Try multiple possible locations for .env file
    let env_locations = vec![".", "../.env", "../../.env"];
    
    for location in env_locations {
        if dotenv::from_filename(location).is_ok() {
            println!("Loaded .env file from {}", location);
            break;
        }
    }

    // If no .env file found, try to use environment variables directly
    let database_url = match env::var("DATABASE_URL") {
        Ok(url) => {
            println!("Using DATABASE_URL from environment");
            url
        },
        Err(_) => {
            // Provide a default URL as fallback
            let default_url = "postgres://postgres:postgres@localhost:5432/afric_lms";
            println!("No DATABASE_URL found, using default: {}", default_url);
            default_url.to_string()
        }
    };

    println!("Connecting to database...");
    
    let connection = sea_orm::Database::connect(&database_url)
        .await
        .expect("Failed to connect to database");

    println!("Running migrations...");
    
    Migrator::up(&connection, None)
        .await
        .expect("Failed to run migrations");

    println!("Migration completed successfully!");
}