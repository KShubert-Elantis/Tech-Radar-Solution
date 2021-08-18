import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
//import styles from './TechRadarWebPart.module.scss';
import * as strings from 'TechRadarWebPartStrings';
export interface ITechRadarWebPartProps {
  description: string;
}
import buildRadar from './RadarClass';
import customHTML from './radar_Visuals';
import { EdgeChromiumHighContrastSelector } from '@uifabric/styling';
import {
  SPHttpClient,
  SPHttpClientResponse,
  SPHttpClientConfiguration
} from '@microsoft/sp-http';

import {
  Environment,
  EnvironmentType
} from '@microsoft/sp-core-library';

import * as React from 'react';
export interface ITechRadarWebPartProps {
  description: string;
}

export interface ISPLists {
  value: ISPList[];
}
export interface ISPList {
  Title: string; //Label Item Name
  Quadrant: number;
  Ring: any;
  Active: boolean;
  Link: string;
  Moved: number;
}
let ListName = 'Tech-Entries';
let entriesArray = [];
//console.log(entriesArray)
export default class TechRadarWebPart extends BaseClientSideWebPart<ITechRadarWebPartProps> {
  public render(): void {
    entriesArray = [];
    this._getListData()
      .then((response) => {
        this.buildEntriesList(response.value);

      });

    this.domElement.outerHTML = customHTML.templateHTML;
    console.log(entriesArray);
    // buildRadar.buildRadar();
    
  }

  private _getListData(): Promise<ISPLists> {
    console.log('Get List Data');
    return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/GetByTitle('" + ListName + "')/Items", SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response.json();
      });
  }

  public buildEntries(): any {
    console.log(this._getListData());
  }

  private buildEntriesList(items: ISPList[]): void {
    console.log('buildEntries');
    if (entriesArray.length == 0) {
      console.log('Start Building entriesArray');
      items.forEach((item: ISPList) => {
        entriesArray.push({
          quadrant: item.Quadrant,
          ring: item.Ring,
          label: item.Title,
          active: item.Active,
          link: item.Link,
          moved: item.Moved
        })        
      });
      console.log('Start Radar Visualization');
      buildRadar.radar_visualization({
        svg_id: "radar",
        width: 810,
        height: 1200,
        colors: {
          background: "#fff",
          grid: "#bbb",
          inactive: "#ddd"
        },
        title: "Elantis Tech Radar / Core Context — 2021.05",
        quadrants: [{
          name: "Business Process Automation"
        }, {
          name: "Business Intelligence"
        }, {
          name: "Enterprise Content Management"
        }, {
          name: "Business Process Management"
        }],
        rings: [
          /*{
          name: "CONSIDER",
          color: "#9c9b9b"
      }, */
          {
            name: "FUTURE",
            color: "#9c9b9b"
          }, {
            name: "STRATEGIC",
            color: "#94A187"
          }, {
            name: "MANAGE",
            color: "#ff6600"
          }, {
            name: "DISTRACTION",
            color: "#000000"
          }
        ],
        print_layout: true,
        // zoomed_quadrant: 0,
        //ENTRIES
        entries: entriesArray
        //ENTRIES
      });
      
      // this.render();
    }

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}