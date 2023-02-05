import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'ng-devui';
import {
  OrganService,
  OrganVo,
} from 'src/app/base/sys/rbac/organ/organ.service';

@Component({
  selector: 'rbac-organ',
  templateUrl: './organ.component.html',
  styleUrls: ['./organ.component.scss'],
})
export class OrganComponent implements OnInit {
  data = [
    {
      title: 'parent node 1 - expanded',
      open: true,
      items: [
        {
          title: 'parent node 11 - folded',
          items: [
            {
              title: 'leaf node 111',
            },
            {
              title: 'leaf node 112',
            },
            {
              title: 'leaf node 113',
            },
            {
              title: 'leaf node 114',
            },
          ],
        },
        {
          title: 'parent node 12 - folded',
          items: [
            {
              title: 'leaf node 121',
            },
            {
              title: 'leaf node 122',
            },
            {
              title: 'leaf node 123',
            },
            {
              title: 'leaf node 124',
            },
          ],
        },
      ],
    },
    {
      title: 'parent node 2 - folded',
      items: [
        {
          title: 'parent node 21 - expanded',
          open: true,
          items: [
            {
              title: 'leaf node 211',
            },
            {
              title: 'leaf node 212',
            },
            {
              title: 'leaf node 213',
            },
            {
              title: 'leaf node 214',
            },
          ],
        },
        {
          title: 'parent node 22 - folded',
          items: [
            {
              title: 'leaf node 221',
            },
            {
              title: 'leaf node 222',
            },
            {
              title: 'leaf node 223',
            },
            {
              title: 'leaf node 224',
            },
          ],
        },
        {
          title: 'parent node 23 - folded',
          items: [
            {
              title: 'leaf node 231',
            },
            {
              title: 'leaf node 232',
            },
            {
              title: 'leaf node 233',
            },
            {
              title: 'leaf node 234',
            },
          ],
        },
      ],
    },
  ];
  basicDataSource = [
    {
      id: 1,
      firstName: 'Mark',
      lastName: 'Otto',
      dob: new Date(1990, 12, 1),
      gender: 'Male',
      description: 'handsome man',
    },
    {
      id: 2,
      firstName: 'Jacob',
      lastName: 'Thornton',
      gender: 'Female',
      dob: new Date(1989, 1, 1),
      description: 'interesting man',
    },
    {
      id: 3,
      firstName: 'Danni',
      lastName: 'Chen',
      gender: 'Female',
      dob: new Date(1991, 3, 1),
      description: 'pretty man',
      expandConfig: { description: 'Danni is here' },
    },
    {
      id: 4,
      firstName: 'green',
      lastName: 'gerong',
      gender: 'Male',
      description: 'interesting man',
      dob: new Date(1991, 3, 1),
    },
  ];
  dataTableOptions = {
    columns: [
      {
        field: 'firstName',
        header: 'First Name',
        fieldType: 'text',
        order: 1,
      },
      {
        field: 'lastName',
        header: 'Last Name',
        fieldType: 'text',
        order: 2,
      },
      {
        field: 'gender',
        header: 'Gender',
        fieldType: 'text',
        order: 3,
      },
      {
        field: 'dob',
        header: 'Date of birth',
        fieldType: 'date',
        order: 4,
      },
    ],
  };
  organ: OrganVo;

  constructor(private service: OrganService) {
    this.organ = {};
    this.service.say().subscribe((vo) => {
      this.organ = vo.data;
    });
  }

  ngOnInit(): void {}

  onNodeSelected(treeNode: TreeNode) {
    console.log('selected', treeNode);
  }

  onNodeToggled(treeNode: TreeNode) {
    console.log('Toggled', treeNode);
  }
}
