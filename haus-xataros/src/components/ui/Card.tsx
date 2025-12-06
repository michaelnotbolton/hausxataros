import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

interface CardProps {
  title: string;
  description: string;
  to: string;
  icon?: string;
  children?: ReactNode;
}

export default function Card({ title, description, to, icon }: CardProps) {
  return (
    <Link to={to} className="card">
      {icon && <div className="card-icon">{icon}</div>}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <span className="card-arrow">→</span>
    </Link>
  );
}
