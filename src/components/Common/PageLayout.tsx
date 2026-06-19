const PageLayout = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <section className="pb-16 pt-[120px] md:pb-20 md:pt-[150px] lg:pb-24 lg:pt-[180px]">
      <div className="container">
        <div className="mb-10 border-b border-stroke pb-8 dark:border-dark-3">
          <h1 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">{title}</h1>
        </div>
        <div className="prose prose-lg max-w-none dark:prose-invert">{children}</div>
      </div>
    </section>
  );
};
export default PageLayout;
