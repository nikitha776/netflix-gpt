import OpenAI from 'openai';
import { OPENAI_APIKEY } from './constants';

const openai = new OpenAI({
  apiKey: OPENAI_APIKEY,
  dangerouslyAllowBrowser : true, // This is the default and can be omitted
});

export default openai;