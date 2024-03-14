import React from 'react'
import TheHeader from './components/layout/TheHeader'
import NatureSection from './components/nature/NatureSection'
import CollestionsSection from './components/teaCollections/CollestionsSection'
import CustomerRewiesSection from './components/customerRewies/CustomerRewiesSection'
import TeaBlogSection from './components/teaBlog/TeaBlogSection'
import QuestionSection from './components/question/QuestionSection'
import Footer from './components/footer/Footer'
import CardSection from './components/card/CardSection'



export default function Home() {
  return (
   <>
   <TheHeader />
   <NatureSection />
   <CollestionsSection />
   <CustomerRewiesSection />
   <TeaBlogSection/>
   <QuestionSection />
   <CardSection />
   <Footer />
   
   </>   
  )
}
