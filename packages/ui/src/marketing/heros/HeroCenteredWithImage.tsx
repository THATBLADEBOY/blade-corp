export type HeroCenteredWithImageProps = {
  heading: string;
  subheading: string;
  image: string;
  imageAlt: string;
};

export const HeroCentredWithImage = ({
  heading,
  subheading,
  image,
  imageAlt,
}: HeroCenteredWithImageProps) => {
  return (
    <>
      <div className="relative overflow-hidden py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {heading}
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">{subheading}</p>
          </div>
          <div className="mt-10 relative max-w-5xl mx-auto">
            <img
              src={image ?? "https://placehold.co/1024x480"}
              className="rounded-xl"
              alt={imageAlt}
            />
            <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
              <div className="w-48 h-48 rounded-lg bg-background/10" />
            </div>
            <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
              <div className="w-48 h-48 rounded-full bg-background/10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
