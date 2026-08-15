import {
	siKotlin, siTypescript, siPython, siGo, siRust, siClojure, siOpenjdk, siPhp,
	siSpringboot, siDotnet, siVuedotjs, siReact, siAngular, siNextdotjs, siLit, siLaravel, siFastapi,
	siGooglecloud,
	siPostgresql, siMysql, siRedis, siElasticsearch,
	siDocker, siKubernetes, siHelm, siArgo,
	siJenkins, siBuildkite,
	siHuggingface,
} from 'simple-icons';

export type SimpleIcon = { path: string; hex: string; title: string };

const iconMap: Record<string, SimpleIcon> = {
	Kotlin: siKotlin,
	Java: siOpenjdk,
	TypeScript: siTypescript,
	Python: siPython,
	Go: siGo,
	Rust: siRust,
	Clojure: siClojure,
	PHP: siPhp,
	'Spring Boot': siSpringboot,
	'.NET': siDotnet,
	'Vue.js': siVuedotjs,
	React: siReact,
	Angular: siAngular,
	'Next.js': siNextdotjs,
	lit: siLit,
	Laravel: siLaravel,
	FastAPI: siFastapi,
	GCP: siGooglecloud,
	PostgreSQL: siPostgresql,
	MySQL: siMysql,
	Redis: siRedis,
	Elasticsearch: siElasticsearch,
	Docker: siDocker,
	Kubernetes: siKubernetes,
	Helm: siHelm,
	Argo: siArgo,
	Jenkins: siJenkins,
	Buildkite: siBuildkite,
	SentenceTransformer: siHuggingface,
};

export const getIcon = (name: string): SimpleIcon | undefined => iconMap[name];
