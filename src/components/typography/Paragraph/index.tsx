import clsx from "clsx";
import React from "react";

interface ParagraphProps {
  /** Conteúdo do texto*/
  content: string;
  /** Peso da fonte */
  weight?: "thin" | "light" | "regular" | "medium" | "semibold" | "bold";
  /** Classes CSS adicionais */
  className?: string;
}

/**
 * Componente de textos longos. Ideal para exibir parágrafos.
 */
const Paragraph: React.FC<ParagraphProps> = ({
  content,
  weight = "regular",
  className,
}: ParagraphProps) => {
  return (
    <p
      className={clsx(
        `text-xs sm:text-sm md:text-base text-foreground leading-relaxed font-${weight}`,
        className
      )}
    >
      {content}
    </p>
  );
};

export default Paragraph;
