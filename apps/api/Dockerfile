FROM rust:1.75-slim as builder

WORKDIR /usr/src/app
COPY . .

RUN cargo build --release

FROM debian:bookworm-slim

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/target/release/api /usr/local/bin/api
COPY --from=builder /usr/src/app/.env .

CMD ["api"]