use axum::{
    extract::{Path, State},
    Json,
};
use sea_orm::{DatabaseConnection, EntityTrait, Set};

use crate::{error::ApiError, models::users};

pub async fn create_user(
    State(db): State<DatabaseConnection>,
    Json(payload): Json<users::Model>,
) -> Result<Json<users::Model>, ApiError> {
    let user = users::ActiveModel {
        name: Set(payload.name),
        email: Set(payload.email),
        ..Default::default()
    }
    .insert(&db)
    .await?;

    Ok(Json(user))
}

pub async fn get_user(
    State(db): State<DatabaseConnection>,
    Path(id): Path<i32>,
) -> Result<Json<users::Model>, ApiError> {
    let user = users::Entity::find_by_id(id)
        .one(&db)
        .await?
        .ok_or(ApiError::NotFound)?;

    Ok(Json(user))
}