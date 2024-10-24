import { AboutSchema } from "./AboutSection-schema";
import homepage from "./HomePage-schema";
import { localePortableString, localeString } from "./localeStringType";
import { WorksSchema } from "./WorksSection-schema";

const schemas = [homepage, AboutSchema, localeString, WorksSchema, localePortableString ];

export default schemas;
