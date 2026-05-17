export class AppConfigService {
  private static instance: AppConfigService;

  private constructor(
    public readonly companyName: string = "Acme Inc.",
    public readonly footer: string = "Confidential"
  ) {}

  public static getInstance(): AppConfigService {
    if (!AppConfigService.instance) {
      AppConfigService.instance = new AppConfigService();
    }
    return AppConfigService.instance;
  }
}
