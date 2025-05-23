import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Your Name | Personal Page",
  description: "A minimalist personal page",
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-800 p-4">
      <div className="w-full max-w-2xl rounded-none bg-[#f8f7e9] p-12 shadow-lg">
        <header className="mb-6">
          <p className="text-sm text-zinc-700">Your Name</p>
          <p className="text-sm text-zinc-700">Your City, State, Country</p>
        </header>

        <h1 className="mb-6 text-2xl font-semibold text-zinc-800">It&apos;s only a page.</h1>

        <div className="space-y-4 text-sm leading-relaxed text-zinc-700">
          <p>Dear visitor,</p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>

          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet.
          </p>

          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
          </p>

          <p>
            Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
            rerum facilis est et expedita distinctio.
          </p>

          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
            placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
          </p>

          <p>
            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
            repudiandae sint et molestiae non recusandae.
          </p>

          <p>Even when it&apos;s only a page.</p>
        </div>

        <footer className="mt-8 border-t border-zinc-300 pt-4 text-xs text-zinc-500">{new Date().getFullYear()}</footer>
      </div>
    </main>
  )
}
