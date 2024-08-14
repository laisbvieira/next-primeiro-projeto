
//permite o uso de recursos que não são compatíveis com a renderização no server, como styled-jsx, hooks de estado e manipulações do DOM
'use client';

// Componente Title
export default function Title({ children, as }) {
    
  const Tag = as;

  return (
      <div>
        <Tag>{children}</Tag>
        <style jsx>{`
          ${Tag} {
            color: red;
          }
        `}</style>
      </div>
    );
  }