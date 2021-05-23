/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

/* eslint-disable */
// @ts-nocheck

export interface paths {
  '/users': {
    get: operations['get-users'];
  };
  '/users/{userId}': {
    get: operations['get-users-userId'];
    parameters: {
      path: {
        userId: string;
      };
    };
  };
  '/ServiceProviderConfig': {
    get: operations['get-ServiceProviderConfig'];
    parameters: {};
  };
  '/ResourceTypes': {
    get: operations['get-ResourceTypes'];
  };
  '/Schemas': {
    get: operations['get-schemas'];
    parameters: {};
  };
  '/accounts': {
    get: operations['get-Accounts'];
    parameters: {};
  };
  '/accounts/{account_id}': {
    get: operations['get-Account-account_id'];
    parameters: {
      path: {
        account_id: string;
      };
    };
  };
  '/services': {
    get: operations['get-Services'];
    parameters: {};
  };
  '/services/{service_id}': {
    get: operations['get-Services-service_id'];
    parameters: {
      path: {
        service_id: string;
      };
    };
  };
  '/subscriptions': {
    get: operations['get-Subscriptions'];
    parameters: {};
  };
  '/subscriptions/{subscription_id}': {
    get: operations['get-Subscriptions-subscription_id'];
    parameters: {
      path: {
        subscription_id: string;
      };
    };
  };
  '/token': {
    get: operations['get-token'];
  };
}

export interface components {
  schemas: {};
}

export interface operations {
  'get-users': {
    parameters: {
      query: {
        /** https://tools.ietf.org/html/rfc7644#section-3.4.2.2 */
        filter?: string;
        /** The "sortBy" paramter specifies the attribute whose value SHALL be used to order the returned responses. */
        sortBy?: string;
        /** The order in which the "sortBy" paramter is applied. */
        sortOrder?: 'ascending' | 'descending';
        /** The 1-based index of the first query result. */
        startIndex?: number;
        /** Specifies the desired maximum number of query results per page. */
        count?: number;
        /** A multi-valued list of strings indicating the names of resource attributes to return in the response, overriding the set of attributes that would be returned by default. */
        attributes?: string[];
        /** A multi-valued list of strings indicating the names of resource attribtues to be removed from the default set of attributes to return. */
        excludedAttributes?: string[];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': {
            schemas: 'urn:ietf:params:scim:api:messages:2.0:ListResponse'[];
            /** The total number of results returned by the list or query operation. */
            totalResults: number;
            /** The 1-based index of the first result in the current set of listed results. */
            startIndex: number;
            /** The number of resources returned in a list response page. */
            itemsPerPage: number;
          } & {
            Resources: ({
              /** A unique identifier for SCIM resource as defined by the service provider. */
              id: string;
              /** A string that is an identifier for the resource as defined by the provisioning client. */
              externalId: string;
              meta: {
                /** The name of the resource type of the resource. */
                resourceType?: string;
                /** The datetime that the resource was added to the service provider. */
                created?: string;
                /** The most recent datetime that the details of this resource were updated at the service provider. */
                lastModified?: string;
                /** The URI of the resource being returned. */
                location?: string;
                /** The version of the resource being returned. */
                version?: string;
              };
            } & {
              /** MySSO's unique identifier for the user. */
              userName?: string;
              /** The components of the user's name. */
              name?: {
                /** The full name, including all middle names, titles, and suffixes as appropriate, formatted for display. */
                formatted?: string;
                /** The family name of the User, or last name in most Western languages. */
                familyName?: string;
                /** The given name of the User, or first name in most Western languages. */
                givenName?: string;
                /** The middle name of the User. */
                middleName?: string;
                /** The honorific prefix(es) of the User, or title in most Western languages. */
                honorificPrefix?: string;
                /** The honorific suffix(es) of the User, or suffix in most Western languages. */
                honorificSuffix?: string;
              };
              /** Phone numbers for the User.  The value SHOULD be canonicalized by the service provider according to the format specified in RFC 3966, e.g., 'tel:+1-201-555-0123'. */
              phoneNumbers?: {
                /** Phone number of the User. */
                value?: string;
                /** A human-readable name, primarily used for display purposes. */
                display?: string;
                /** List of supported phone types. */
                type?: 'fax' | 'home' | 'work' | 'mobile' | 'other' | 'pager';
                /** A Boolean value indicating the 'primary' or preferred attribute value for this attribute, e.g., the preferred phone number or primary phone number. */
                primary?: boolean;
              }[];
              /** A physical mailing address for this User. Canonical type values of 'work', 'home', and 'other'.  This attribute is a complex type with the following sub-attributes. */
              addresses?: {
                /** The full mailing address, formatted for display or use with a mailing label.  This attribute MAY contain newlines. */
                formatted?: string;
                /** The full street address component, which may include house number, street name, P.O. box, and multi-line extended street address information.  This attribute MAY contain newlines. */
                streetAddress?: string;
                /** The city or locality component. */
                locality?: string;
                /** The state or region component. */
                region?: string;
                /** The zip code or postal code component. */
                postalCode?: string;
                /** The country name component. */
                country?: string;
                /** A label indicating the attribute's function, e.g., 'work' or 'home'. */
                type?: 'work' | 'home' | 'other';
                primary?: boolean;
              }[];
              /** Email addresses for the user */
              emails?: {
                /** Email addresses for the user in lowercase. */
                value?: string;
                /** A human-readable name, primarily used for display purposes.  READ-ONLY. */
                display?: string;
                /** A label indicating the attribute's function, e.g., 'work' or 'home'. */
                type?: 'work' | 'home' | 'other';
                /** A Boolean value indicating the 'primary' or preferred attribute value for this attribute, e.g., the preferred mailing address or primary email address. */
                primary?: boolean;
              }[];
              /** The name of the user, suitable for display to end-users. */
              displayName?: string;
              /** The casual way to address user in real life. */
              nickName?: string;
              /** The URI that is a uniform resource locator and that points to a location representing the user's online profile. */
              profileUrl?: string;
              /** The user's title. */
              title?: string;
              /** Used to identify the relationship between the organization and the user. */
              userType?: string;
              /** Indicates the user's preferred written or spoken language. */
              preferredLanguage?: string;
              /** Used to indicate the User's default location for purpose of localization. */
              locale?: string;
              /** The User's time zone. */
              timezone?: string;
              /** A Boolean value indicating the user's adminstrative status. */
              active?: boolean;
              /** A list of groups the user belongs, either through direct membership, through nested groups, or dynamically calculated. */
              groups?: string[];
              /** A list of entitlements for the user that represent a thing the user has. An entitlement may be an additional right to a thing, object, or service. */
              entitlements?: string[];
              roles?: string[];
              schemas?: 'urn:ietf:params:scim:schemas:core:2.0:User'[];
            })[];
          };
        };
      };
      /** Bad Request */
      400: {
        content: {
          'application/json': {
            schemas: 'urn:ietf:params:scim:api:messages:2.0:Error'[];
            /** Human readable explanation of the error. */
            detail?: string;
            /** A SCIM detail error keyword. */
            scimType?:
              | 'invalidFilter'
              | 'tooMany'
              | 'uniqueness'
              | 'mutability'
              | 'invaliddSyntax'
              | 'invalidPath'
              | 'noTarget'
              | 'invalidValue'
              | 'invalidVers'
              | 'sensitive';
            /** The HTTP status code. */
            status: 400 | 401 | 403 | 404 | 409 | 412 | 413 | 500 | 501;
          };
        };
      };
      /** Unauthorized */
      401: {
        content: {
          'application/json': paths['~1users']['get']['responses']['400']['content']['application~1json']['schema'];
        };
      };
      /** Forbidden */
      403: {
        content: {
          'application/json': paths['~1users']['get']['responses']['400']['content']['application~1json']['schema'];
        };
      };
      /** Bad Request */
      404: unknown;
    };
  };
  'get-users-userId': {
    parameters: {
      path: {
        userId: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': paths['~1users']['get']['responses']['200']['content']['application~1json']['schema']['allOf']['1']['properties']['Resources']['items'];
        };
      };
      401: {
        content: {
          'application/json': paths['~1users']['get']['responses']['400']['content']['application~1json']['schema'];
        };
      };
      /** Forbidden */
      403: {
        content: {
          'application/json': paths['~1users']['get']['responses']['400']['content']['application~1json']['schema'];
        };
      };
      /** Not Found */
      404: {
        content: {
          'application/json': paths['~1users']['get']['responses']['400']['content']['application~1json']['schema'];
        };
      };
    };
  };
  'get-ServiceProviderConfig': {
    parameters: {};
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': {
            /** An HTTP-addressable URL pointing to the service provider's human-consumable help documentation. */
            documentationUri?: string;
            /** A complex type that specifies PATCH configuration options. */
            patch: {
              /** A Boolean value specifying whether or not the operation is supported. */
              supported: boolean;
            };
            /** A complex type that specifies bulk configuration options. */
            bulk: {
              /** A Boolean value specifying whether or not the operation is supported. */
              supported: boolean;
              /** An integer value specifying the maximum number of operations. */
              maxOperations: number;
              /** An integer value specifying the maximum payload size in bytes. */
              maxPayloadSize: number;
            };
            /** A complex type that specifies FILTER options. */
            filter: {
              /** A Boolean value specifying whether or not the operation is supported. */
              supported: boolean;
              /** An integer value specifying the maximum number of resources returned in a response. */
              maxResults: number;
            };
            /** A complex type that specifies configuration options related to changing a password. */
            changePassword: {
              /** A Boolean value specifying whether or not the operation is supported. */
              supported: boolean;
            };
            /** A complex type that specifies Sort configuration options. */
            sort: {
              /** A Boolean value specifying whether or not the operation is supported. */
              supported: boolean;
            };
            /** A complex type that specifies ETag configuration options. */
            etag: {
              /** A Boolean value specifying whether or not the operation is supported. */
              supported: boolean;
            };
            /** A multi-valued complex type that specifies supported authentication scheme properties. */
            authenticationSchemes: {
              /** The authentication scheme. */
              type: string;
              /** The common authentication scheme name. */
              name: string;
              /** A description of the authentication scheme. */
              description: string;
              /**
               * An HTTP-addressable URL pointing to the authentication
               *          scheme's specification.
               */
              specUri?: string;
              /**
               * An HTTP-addressable URL pointing to the
               *          authentication scheme's usage documentation.
               */
              documentationUri?: string;
            }[];
            schemas?: 'urn:ietf:params:scim:schemas:core:2.0:ServiceProviderConfig'[];
          };
        };
      };
    };
  };
  'get-ResourceTypes': {
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': paths['~1users']['get']['responses']['200']['content']['application~1json']['schema']['allOf']['0'] & {
            Resources?: {
              /** The resource type's server unique id.  This is often the same value as the "name" attribute. */
              id?: string;
              /** The resource type name. */
              name: string;
              /** The resource type's human-readable description. */
              description?: string;
              /** The resource type's HTTP-addressable endpoint relative to the Base URL of the service provider. */
              endpoint: string;
              /** The resource type's primary/base schema URI. */
              schema: string;
              /** A list of URIs of the resource type's schema extensions. */
              schemaExtensions?: {
                /** The URI of an extended schema. */
                schema: string;
                /** A Boolean value that specifies whether or not the schema extension is required for the resource type. */
                required: boolean;
              }[];
              schemas: 'urn:ietf:params:scim:schemas:core:2.0:ResourceType'[];
            }[];
          };
        };
      };
    };
  };
  'get-schemas': {
    parameters: {};
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': paths['~1users']['get']['responses']['200']['content']['application~1json']['schema']['allOf']['0'] & {
            Resources?: {
              /** The unique URI of the schema. */
              id: string;
              /** The schema's human-readable name. */
              name?: string;
              /** The schema's human-readable description. */
              description?: string;
              /** A complex type that defines service provider attributes and their qualities. */
              attributes?: {
                /** The attribute's name. */
                name?: string;
                /** The attribute's data type. */
                type?: string;
                /** When an attribute is of type "complex", "subAttributes" defines a set of sub-attributes. */
                subAttributes?: { [key: string]: any }[];
                /** A Boolean value indicating the attribute's plurality. */
                multiValued?: boolean;
                /**
                 * A Boolean value that specifies whether or not the
                 *          attribute is required.
                 */
                required?: boolean;
                /** A collection of suggested canonical values that MAY be used. */
                canonicalValues?: string;
                /** A single keyword indicating the circumstances under which the value of the attribute can be (re)defined. */
                mutability?:
                  | 'readOnly'
                  | 'readWrite'
                  | 'immutable'
                  | 'writeOnly';
                /** A Boolean value that specifies whether or not a string attribute is case sensitive. */
                caseExact?: boolean;
                /** A single keyword that indicates when an attribute and associated values are returned in response to a GET request or in response to a PUT, POST, or PATCH request. */
                returned?: 'always' | 'never' | 'default' | 'request';
                /** A single keyword value that specifies how the service provider enforces uniqueness of attribute values. */
                uniqueness?: 'none' | 'server' | 'global';
                /** A multi-valued array of JSON strings that indicate the SCIM resource types that may be referenced. */
                referenceTypes?: string;
                /** The attribute's human-readable description. */
                description?: string;
              }[];
            }[];
          };
        };
      };
    };
  };
  'get-Accounts': {
    parameters: {
      query: {
        /** A dimension by which items should be sorted. */
        sort_by?: string;
        /** The order, one of asc or desc, indicating ascending or descending order. */
        sort_order?: string;
        /** A non-negative, non-zero integer indicating the maximum number of results to return at one time. */
        page_size?: string;
        /** A non-zero integer representing the page of the results. */
        page?: string;
        /** In certain cases such as querying on a large data set, in order to optimize the query execution while paginating, querying and retrieving the data based on result set of previous page migh be appropriate. Such a page_token could be an encrypted value of primary keys to navigate next and previous page along with the directions. */
        page_token?: string;
        /** A boolean indicating that total number of items (total_items) and pages (total_pages) are expected to be returned in the response. */
        total_required?: string;
        /** Search for an account by party id */
        party_id?: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': {
            /** Total number of items. */
            total_items?: number;
            /** Total number of pages. */
            total_pages?: number;
            links?: {
              /** The complete target URL, or link, to use in combination with the method to make the related call, as defined by [RFC 6570](https://tools.ietf.org/html/rfc6570), with the addition of the `$`, `(`, and `)` characters for pre-processing. The `href` is the key HATEOAS component that links a completed call with a subsequent call. */
              href: string;
              /** The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. For possible values, see [Link Relationship Types](http://www.iana.org/assignments/link-relations/link-relations.xhtml). */
              rel: string;
              /** The link title. */
              title?: string;
              /** The media type, as defined by [RFC 2046](https://www.ietf.org/rfc/rfc2046.txt), that describes the link target. */
              mediaType?: string;
              /** The HTTP method required for the related call. */
              method?:
                | 'GET'
                | 'POST'
                | 'PUT'
                | 'DELETE'
                | 'HEAD'
                | 'CONNECT'
                | 'OPTIONS'
                | 'PATCH';
              /** The media type in which to submit data in the request. */
              submissionEncType?: string;
              submissionSchema?: {
                items?: { [key: string]: any };
                additionalItems?: { [key: string]: any };
                dependencies?: { [key: string]: any };
                definitions?: { [key: string]: any };
                properties?: { [key: string]: any };
                patternProperties?: { [key: string]: any };
                allOf?: { [key: string]: any }[];
                anyOf?: { [key: string]: any }[];
                oneOf?: { [key: string]: any }[];
                not?: { [key: string]: any };
                links?: { [key: string]: any }[];
                media?: {
                  /** A media type, as described in RFC 2046. */
                  type?: string;
                  /** A content encoding scheme, as described in RFC 2045. */
                  binaryEncoding?: string;
                };
                /** URI Template resolved as for the 'href' keyword in the Link Description Object.  The resulting URI Reference is resolved against the current URI base and sets the new URI base for URI references within the instance. */
                base?: string;
              } & { [key: string]: any };
              targetSchema?: paths['~1accounts']['get']['responses']['200']['content']['application~1json']['schema']['allOf']['0']['properties']['links']['items']['properties']['submissionSchema'];
            }[];
          } & {
            accounts?: {
              id?: string;
              /** Party Id */
              customer?: string;
              subscriptions?: string[];
            }[];
          };
        };
      };
      /** Not Found */
      404: unknown;
    };
  };
  'get-Account-account_id': {
    parameters: {
      path: {
        account_id: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': paths['~1accounts']['get']['responses']['200']['content']['application~1json']['schema']['allOf']['1']['properties']['accounts']['items'];
        };
      };
      /** Not Found */
      404: unknown;
    };
  };
  'get-Services': {
    parameters: {};
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': paths['~1accounts']['get']['responses']['200']['content']['application~1json']['schema']['allOf']['0'] & {
            services?: {
              network_service?: {
                type?: 'NetworkService';
              } & {
                id?: string;
                service_catalog_id?: string;
                type?: 'ContentAddOnService' | 'NetworkService';
              };
              content_addon_service?: {
                type?: 'ContentAddOnService';
              } & paths['~1services']['get']['responses']['200']['content']['application~1json']['schema']['allOf']['1']['properties']['services']['items']['properties']['network_service']['allOf']['1'];
            }[];
          };
        };
      };
    };
  };
  'get-Services-service_id': {
    parameters: {
      path: {
        service_id: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          'application/json':
            | paths['~1services']['get']['responses']['200']['content']['application~1json']['schema']['allOf']['1']['properties']['services']['items']['properties']['network_service']
            | paths['~1services']['get']['responses']['200']['content']['application~1json']['schema']['allOf']['1']['properties']['services']['items']['properties']['content_addon_service'];
        };
      };
    };
  };
  'get-Subscriptions': {
    parameters: {
      query: {
        /** filters by subscription state, e.g. active */
        state?: string;
        /** Find subscriptions using a BEP party id */
        party_id?: string;
        /** Find subscriptions using a mac address */
        mac_address?: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': paths['~1accounts']['get']['responses']['200']['content']['application~1json']['schema']['allOf']['0'] & {
            subscriptions?: {
              /** Unique identifier for Service/Account Id */
              id?: string;
              /** account id associated with the primary owner of the account.. */
              account_id?: string;
              /** Id associated with the vega products/services api namespace. */
              service_id?: string;
              /** Name of the plan associated with the subscription */
              plan_name?: string;
              /** # look at common types */
              billing_address?: {
                street?: string;
                locality?: string;
                region?: string;
                postal_code?: string;
                country?: string;
              };
              state?: {
                code?: string;
                details?: string;
              };
              events?: {
                type?: 'activation' | 'deactivation';
                /** The time that the event occurred. Specified as a `date-time`, per [RFC3339](https://tools.ietf.org/html/rfc3339). */
                timestamp?: string;
              }[];
              network_subscription?: {
                usage?: {
                  total_usage_mb?: number;
                  /** Time at which usage began to be counted for this update. Specified as a `date-time`, per [RFC3339](https://tools.ietf.org/html/rfc3339). */
                  start_timestamp?: string;
                  /** Time at which usage stopped being counted for this update. Specified as a `date-time`, per [RFC3339](https://tools.ietf.org/html/rfc3339). */
                  end_timestamp?: string;
                  upload_speed_mbps?: number;
                  download_speed_mbps?: number;
                };
                /** The next billing date for this subscription. Specified as a `full-date`, per [RFC3339](https://tools.ietf.org/html/rfc3339). */
                renewal_date?: string;
                modem?: {
                  mac_address?: string;
                  state?: {
                    code?: string;
                    details?: string;
                  };
                };
                bytes_allocated?: number;
              };
              content_add_on_subscription?: {
                usage?: {
                  /** The total number of bytes received by the interface since the last update. */
                  bytes_count?: number;
                  /** Time at which usage began to be counted for this update. Specified as a `date-time`, per [RFC3339](https://tools.ietf.org/html/rfc3339) */
                  timestamp?: string;
                };
                hard_drive?: {
                  id?: string;
                  state?: {
                    code?: string;
                    details?: string;
                  };
                  size?: number;
                };
                bytes_allocated?: number;
              };
            }[];
          };
        };
      };
      /** Bad Request */
      400: unknown;
      /** Not Found */
      404: unknown;
    };
  };
  'get-Subscriptions-subscription_id': {
    parameters: {
      path: {
        subscription_id: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': paths['~1subscriptions']['get']['responses']['200']['content']['application~1json']['schema']['allOf']['1']['properties']['subscriptions']['items'];
        };
      };
      /** Not Found */
      404: unknown;
    };
  };
  'get-token': {
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': {
            access_token?: string;
            refresh_token?: string;
          };
        };
      };
      /** Unauthorized */
      401: unknown;
    };
  };
}
