export default function ArtisanProileView({
  params,
}: {
  params: { artisan: string };
}) {
  const { artisan } = params;
  return (
    <div>
      <h1>Name: {artisan}</h1>
    </div>
  );
}
