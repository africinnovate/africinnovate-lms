use axum::{
    http::StatusCode,
    response::{IntoResponse, Response},
};
use thiserror::Error;

#[derive(Error, Debug)]
pub enum ApiError {
    #[error("Database error: {0}")]
    Database(#[from] sea_orm::DbErr),
    #[error("Not found")]
    NotFound,
    #[error("Bad request: {0}")]
    BadRequest(String),
}

impl IntoResponse for ApiError {
    fn into_response(self) -> Response {
        let (status, message) = match self {
            ApiError::Database(err) => (StatusCode::INTERNAL_SERVER_ERROR, err.to_string()),
            ApiError::NotFound => (StatusCode::NOT_FOUND, "Not found".to_string()),
            ApiError::BadRequest(msg) => (StatusCode::BAD_REQUEST, msg),
        };

        (status, message).into_response()
    }
}