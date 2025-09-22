import { getDictionary } from "@/helpers/dictionaries";
import type { Locale } from "@/helpers/localization";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);

  return <h1>{dictionary["greetings"]}</h1>; 
}