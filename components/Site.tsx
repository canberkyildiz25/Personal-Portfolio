import type { Lang } from '@/lib/site';
import { Featured } from './Featured';
import { Header } from './Header';
import { Hero } from './Hero';
import { Motion } from './Motion';
import { Background, Checklist, Contact, Footer, Parts } from './Sections';

/** The whole page. Both language routes render this with a different `lang`. */
export function Site({ lang }: { lang: Lang }) {
  return (
    <>
      <Header lang={lang} />
      <main id="main">
        <Hero lang={lang} />
        <Featured lang={lang} />
        <Parts lang={lang} />
        <Background lang={lang} />
        <Checklist lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <Motion />
    </>
  );
}
