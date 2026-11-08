import { Button } from '../components/ui.jsx'

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden pt-28">
      <div className="grid-bg fade-mask pointer-events-none absolute inset-0" />
      <div className="container-x relative text-center">
        <p className="label text-electric">Error 404 · workflow not found</p>
        <h1 className="mt-6 font-display text-[7rem] font-black leading-none md:text-[12rem]">404</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-white/60">This page took a handoff and never came back. Let’s route you somewhere useful.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button to="/">Back to home</Button>
          <Button to="/case-studies" variant="ghost">See case studies</Button>
        </div>
      </div>
    </section>
  )
}
