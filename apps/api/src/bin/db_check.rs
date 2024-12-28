// src/bin/db_check.rs

use sea_orm::*;
use dotenv::dotenv;

#[tokio::main]
async fn main() -> Result<(), DbErr> {
    dotenv().ok();
    
    let database_url = std::env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set");
    
    let db = Database::connect(&database_url).await?;
    let database = db.get_database_backend();
    
    // Removed reference operator
    let statement = Statement::from_string(
        database,
        "SELECT tablename FROM pg_tables WHERE schemaname = 'public'".to_owned(),
    );
    let tables = db.query_all(statement).await?;
    
    println!("\n=== Database Tables ===");
    for table in tables {
        let table_name: String = table.try_get("", "tablename")?;
        println!("\nTable: {}", table_name);
        
        // Removed reference operator
        let columns_statement = Statement::from_string(
            database,
            format!(
                "SELECT column_name, data_type, is_nullable 
                 FROM information_schema.columns 
                 WHERE table_name = '{}'
                 ORDER BY ordinal_position",
                table_name
            ).to_owned(),
        );
        let columns = db.query_all(columns_statement).await?;
        
        println!("Columns:");
        for column in columns {
            let name: String = column.try_get("", "column_name")?;
            let data_type: String = column.try_get("", "data_type")?;
            let is_nullable: String = column.try_get("", "is_nullable")?;
            println!("  {} ({}) {}", 
                name, 
                data_type, 
                if is_nullable == "YES" { "NULL" } else { "NOT NULL" }
            );
        }
        
        // Removed reference operator
        let count_statement = Statement::from_string(
            database,
            format!("SELECT COUNT(*) as count FROM {}", table_name).to_owned(),
        );
        let count = db.query_one(count_statement).await?;
        
        if let Some(count) = count {
            let row_count: i64 = count.try_get("", "count")?;
            println!("Row count: {}", row_count);
        }
    }
    
    Ok(())
}