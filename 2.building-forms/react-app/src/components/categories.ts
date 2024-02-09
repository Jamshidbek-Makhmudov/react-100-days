const categories = ["Groceries", "Utilities", "Entertainment"] as const;
 //as const bu zod validation uchun
/**sababi zod bizdan ozgarmas array kutadi biz bu yerda uni const qilib belgilagan bolsakda .push methodi bilan unga qoshimcha kiritsak boladi shuning as const typescript magic methodi orqali typelab qoysak u readonly bolib qoladi */
export default categories;
