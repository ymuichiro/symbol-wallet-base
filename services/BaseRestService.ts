import { Configuration } from '@/services/node-client';

/**
 * Node に対する Rest 通信を行うクラス向けの基底クラス
 * Configuration を変更する場合、本クラスにて定義する
 */
export class BaseRestService {
  protected config: Configuration;

  protected constructor(node: string) {
    this.config = new Configuration({ basePath: node });
  }
}
