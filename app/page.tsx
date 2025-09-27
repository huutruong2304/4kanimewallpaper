import ImageSection from '@/components/custom/image-section';
import WallpaperCard from '@/components/custom/wallpaper-card';
import AppContainer from '@/components/layout/app-container';
import { getImagesHot, getImagesNew, getImagesPopular } from '@/service/api';
import { LIMIT_PER_SECTION } from '../constants';
import { CategoryLabel } from '@/types';

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
      <ImageSection title={CategoryLabel.NEW} href="/new">
        {newList.map((item) => (
          <WallpaperCard key={item.id} id={item.id} src={item.thumbnail} />
        ))}
      </ImageSection>

      {/* hot */}
      <ImageSection title={CategoryLabel.HOT} href="/hot">
        {hotList.map((item) => (
          <WallpaperCard key={item.id} id={item.id} src={item.thumbnail} />
        ))}
      </ImageSection>

      {/* popular */}
      <ImageSection title={CategoryLabel.POPULAR} href="/popular">
        {popularList.map((item) => (
          <WallpaperCard key={item.id} id={item.id} src={item.thumbnail} />
        ))}
      </ImageSection>
    </AppContainer>
  );
}
