import QueryBuilder from '../../../builder/QueryBuilder';
import { IFaq } from './faq.interface';
import { Faq } from './faq.model';

const getAllFaqFromDB = async (query: Record<string, any>) => {
      const faqQueryResult = new QueryBuilder(Faq.find(), query).paginate().sort().fields();
      const meta = await faqQueryResult.countTotal();
      const result = await faqQueryResult.modelQuery;

      return {
            result,
            meta,
      };
};
const createFaqToDB = async (faqData: IFaq) => {
      const result = await Faq.create(faqData);
      return result;
};
const updateFaqToDB = async (id: string, faqData: IFaq) => {
      const result = await Faq.findOneAndUpdate({ _id: id }, faqData, { new: true });
      return result;
};

export const FaqService = {
      getAllFaqFromDB,
      createFaqToDB,
      updateFaqToDB,
};