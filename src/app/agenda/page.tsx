import Footer from '@/components/Footer';
import AgendaCard from '@/components/common/AgendaCard';
import Menu from '@/components/common/Menu';
import { client } from '../../../sanity/lib/client';
import { groq } from 'next-sanity';
import Agenda from '@/components/Agenda';
import { playfare } from '../font';

async function getAgendaData() {
  return client.fetch(groq`*[_type == "agenda"][0] `);
}

export default async function AgendaPage() {
  const agenda = getAgendaData();
  return (
    <div>
      <Menu />
      <div>
        <Agenda playfare={playfare.className} />
      </div>
      <Footer />
    </div>
  );
}
