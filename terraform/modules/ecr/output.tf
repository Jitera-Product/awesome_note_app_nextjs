
output "web_repository_url" {
  description = "URL of ecr url for web"
  value       = aws_ecr_repository.frontend.repository_url
}

output "web_arn" {
  description = "ARN of ecr url for web"
  value       = aws_ecr_repository.frontend.arn
}