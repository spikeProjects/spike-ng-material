import { MaterialCommonModule } from './material-common.module';

describe('MaterialCommonModule', () => {
  let materialCommonModule: MaterialCommonModule;

  beforeEach(() => {
    materialCommonModule = new MaterialCommonModule();
  });

  it('should create an instance', () => {
    expect(materialCommonModule).toBeTruthy();
  });
});
