interface PageHeroProps {
  title: string
  subtitle: string
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <>
      <h1>
        <p className="text-foreground sm:text-exl mb-1 text-2xl font-semibold">
          {title}
        </p>
      </h1>
      <p className="text-muted-foreground mb-8 text-sm">{subtitle}</p>
    </>
  )
}
