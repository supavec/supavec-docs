export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div className="flex items-center gap-2 text-xl font-bold">
      <img src="/logo.png" className="size-8" />
      <span>Supavec</span>
    </div>
  )
}
