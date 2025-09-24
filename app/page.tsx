import ImageCard from '@/components/custom/image-card';
import ImageSection from '@/components/custom/image-section';
import AppContainer from '@/components/layout/app-container';
import { getImagesHot, getImagesNew, getImagesPopular } from '@/service/api';

const LIMIT_PER_SECTION = 12;

export default async function Home() {
  const newResponse = await getImagesNew(1);
  const newList = newResponse.data.slice(0, LIMIT_PER_SECTION);
  const hotResponse = await getImagesHot(1);
  const hotList = hotResponse.data.slice(0, LIMIT_PER_SECTION);
  const popularResponse = await getImagesPopular(1);
  const popularList = popularResponse.data.slice(0, LIMIT_PER_SECTION);

  return (
    <AppContainer>
      {/* new */}
      <ImageSection title="New Upload" href="/new">
        {newList.map((item) => (
          <ImageCard key={item.id} id={item.id} src={item.thumbnail} />
        ))}
      </ImageSection>

      {/* hot */}
      <ImageSection title="Hot" href="/top">
        {hotList.map((item) => (
          <ImageCard key={item.id} id={item.id} src={item.thumbnail} />
        ))}
      </ImageSection>

      {/* popular */}
      <ImageSection title="Popular" href="/top">
        {popularList.map((item) => (
          <ImageCard key={item.id} id={item.id} src={item.thumbnail} />
        ))}
      </ImageSection>
    </AppContainer>
  );
}
