import CompanionCard from '@/components/CompanianCard';
import SearchInput from '@/components/SearchInput';
import SubjectFilter from '@/components/SubjectFilter';
import { getAllCompanions } from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';
import { stdout } from 'process';
import React from 'react'

const CompaniansLibrary = async({searchParams}:SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : '';
  const topic = filters.topic ? filters.topic : '';
  stdout.write(`Fetching companions for subject: ${subject} and topic: ${topic}\n`);

  const companions=await getAllCompanions({subject, topic});
  stdout.write(`Fetched ${companions.length} companions\n`);
  stdout.write(`Companions: ${JSON.stringify(companions, null, 2)}\n`);
  return (
    <main>
            <section className="flex justify-between gap-4 max-sm:flex-col">
                <h1>Companion Library</h1>
                <div className="flex gap-4">
                    <SearchInput />
                    <SubjectFilter />
                    
                </div>
            </section>
            <section className="companions-grid">
                {companions.map((companion) => (
                    <CompanionCard
                        key={companion.id}
                        {...companion}
                        color={getSubjectColor(companion.subject)}
                    />
                ))}
            </section>
        </main>
  )
}

export default CompaniansLibrary