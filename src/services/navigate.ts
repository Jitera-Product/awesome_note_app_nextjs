import { useRouter } from "next/router";
import { parseParamUrl } from "@utils/navigation";

export const useNavigateService = () => {
  const navigateService = useRouter();

  return {
    navigate: (
      url: string,
      params?: Record<string, string | number | undefined>
    ) => {
      navigateService.push({
        pathname: parseParamUrl(url, params),
        query: params,
      });
    },
    replace: (
      url: string,
      params?: Record<string, string | number | undefined>
    ) => {
      navigateService.push({
        pathname: parseParamUrl(url, params),
        query: params,
      });
    },
    goBack: () => {
      navigateService.back();
    },
    reload: () => {
      navigateService.reload();
    },
  };
};
