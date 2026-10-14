import type { Lang } from '@/lib/site';
import { Featured } from './Featured';
import { Header } from './Header';
import { Hero } from './Hero';
import { Motion } from './Motion';
import { PartsList } from './PartsList';
import { Background, Contact, Hire } from './Sections';

/** The whole page. Both language routes render this with a different `lang`. */
export function Site({ lang }: { lang: Lang }) {
  return (
    <>
      <Header lang={lang} />
      <main id="main">
        <Hero lang={lang} />
        <Featured lang={lang} />
        <PartsList lang={lang} />
        <Background lang={lang} />
        <Hire lang={lang} />
      </main>
      <Contact lang={lang} />
      <Motion />
    </>
  );
}
