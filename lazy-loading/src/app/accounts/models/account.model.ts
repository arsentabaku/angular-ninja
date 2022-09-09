export interface AccountSummary {
  accountId: string;
  companyName: string;
  createdOn: string;
  isActive: boolean;
  licenseId: string;
  sourceIntegrationSource: string;
  tags: string[];
}

export interface Account {
  readonly id: string;
  readonly createdOn: Date;
  readonly tags: string[];
  readonly company: Company;
  readonly source: AccountSource;
  readonly members: LinkedMember[];
  readonly subscription: Subscription;
  readonly applicationPermissions: ApplicationPermissions[];
}

export interface Company {
  name: string;
}

export interface AccountSource {
  // Free text defining the source of this account.
  // E.g. Telekom-tcmp, vrdirect-salesforce, etc...
  readonly integrationSource: string;
  // Ideally unique identifiers of the account at the source
  readonly externalReference: string;
  // The source's definition of the desired license.
  // Not this solution's license id. That is defined within in subscription.model.ts
  licenseReference: string;
}


export interface LinkedMember {
  readonly memberId: string;
  permissions: MemberPermission[];
  isActive: boolean;
  readonly linkedOn: Date;
  readonly expiresOn?: Date;
}

export enum MemberPermission {
  AccountOwner = 'account-owner',
  ProjectsOwner = 'projects-owner',
  ProjectsContributor = 'projects-contributor',
  ProjectsReader = 'projects-reader',
  ProjectsSupport = 'projects-support',
}

export interface Subscription {
  isActive: boolean;
  licenseId: string;
}

export interface ApplicationPermissions {
  readonly appId: string;
  // As defined by the LinkAPI
  readonly permissions: ApplicationPermission[];
}

export enum ApplicationPermission {
  CanCreateCustomLink = 'can-create-custom-link',
  CanAutoGenerateLink = 'can-auto-generate-link',
  CanRegenerateLink = 'can-regenerate-link',
  CanSetLinkAvailability = 'can-set-link-availability',
  CanDeleteLink = 'can-delete-link',
}
