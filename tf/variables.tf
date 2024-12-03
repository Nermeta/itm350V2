variable "ami" {
  type = string
  description = "Name of the machine"
  default = "ami-0f19a1cf9c1469fd6"
}

variable "cluster_name" {
  type = string
  description = "Name of the Cluster"
  default = "ECS Instance - bb-cluster"
}

variable "container_image" {
   description = "Docker image for the container"
   default     = "itm350-qoi123-bb:1.0"
}

variable "container_port" {
  type = number
   description = "Port that the container will listen on"
   default     = 8080
}

variable "instance_name_prefix" {
  type = string
  description = "Prefix for instance names"
  default     = "ecs-instance"
}

variable "instance_type" {
  type = string
  description = "EC2 instance type for the ECS tasks"
  default     = "t2.micro"
}

variable "lab_role" {
  type = string
  description = "IAM role ARN for ECS instances"
  default     = "arn:aws:iam::827224757504:role/LabRole" 
}


variable "region" {
  type        = string
  description = "The ECS region we are operating out of"
  default     = "us-east-1"
}

variable "vpc_cidr" {
  type        = string
  description = "The CIDR notation for our vpc"
  default     = "10.0.0.0/16"
}

variable "vpc_prefix" {
  type        = string
  description = "Identifier Prefix for the VPC"
  default     = "Yet_Another_VPC"
}
