import httpService from "./http.service";

const articleEndPoint = "article/";

const articleService = {
    get: async () => {
        const { data } = await httpService.get(articleEndPoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(
            articleEndPoint + payload._id,
            payload
        );
        return data;
    },
    remove: async (articleId) => {
        const { data } = await httpService.delete(articleEndPoint + articleId);
        return data;
    }
};

export default articleService;
