use axum::{
    routing::{get, post},
    Router,
};
use sea_orm::DatabaseConnection;

use crate::handlers::users;

pub fn routes() -> Router<DatabaseConnection> {
    Router::new()
        .route("/users", post(users::create_user))
        .route("/users/:id", get(users::get_user))
}