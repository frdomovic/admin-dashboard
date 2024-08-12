import { ApiResponse } from '@calimero-is-near/calimero-p2p-sdk';
import {
  ContextStorage,
  Context,
  HealthRequest,
  HealthStatus,
  ContextClientKeysList,
  ContextUsersList,
  GetInstalledApplicationsResponse,
  ApiContext,
  ContextList,
  DidResponse,
  DeleteContextResponse,
  JoinContextResponse,
  InstallApplicationResponse,
} from './dataSource/NodeDataSource';

export interface NodeApi {
  getInstalledApplications(): ApiResponse<GetInstalledApplicationsResponse>;
  getContexts(): ApiResponse<ContextList>;
  getContext(contextId: string): ApiResponse<ApiContext>;
  getContextClientKeys(contextId: string): ApiResponse<ContextClientKeysList>;
  getContextUsers(contextId: string): ApiResponse<ContextUsersList>;
  deleteContext(contextId: string): ApiResponse<DeleteContextResponse>;
  startContexts(
    applicationId: string,
    initFunction: string,
    initArguments: string,
  ): ApiResponse<Context>;
  getDidList(): ApiResponse<DidResponse>;
  health(request: HealthRequest): ApiResponse<HealthStatus>;
  getContextStorageUsage(contextId: string): ApiResponse<ContextStorage>;
  installApplication(
    selectedPackageId: string,
    selectedVersion: string,
    ipfsPath: string,
    hash: string,
  ): ApiResponse<InstallApplicationResponse>;
  joinContext(contextId: string): ApiResponse<JoinContextResponse>;
}
