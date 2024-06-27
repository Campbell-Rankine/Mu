import Footer from '@/components/ui/signinFooter'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <main className="grow bg-header">

      {children}
      <Footer />
    </main>
  )
}
