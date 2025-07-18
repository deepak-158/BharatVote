import { MainLayout } from '@/components/layout/MainLayout'
import { Hero } from '@/components/sections/Hero'
import { VotingProcess } from '@/components/sections/VotingProcess'
import { LatestNews } from '@/components/sections/LatestNews'
import { Elections } from '@/components/sections/Elections'

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <VotingProcess />
      <LatestNews />
      <Elections />
    </MainLayout>
  )
}
