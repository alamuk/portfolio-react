import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import LandingSection from "../components/ContactMeSection";

const ComponentPreviews = () => {
    return (
      <Previews palette={<PaletteTree />}>
        <ComponentPreview path="/LandingSection">
          <LandingSection />
        </ComponentPreview>
      </Previews>
    );
}

export default ComponentPreviews